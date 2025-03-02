import styled from 'styled-components';

// Container for page sections that maintains consistent width and padding
export const SectionContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px;
  
  @media (max-width: 768px) {
    padding: 25px 15px;
  }
  
  @media (max-width: 480px) {
    padding: 20px 10px;
  }
`;

// Responsive grid layout for various screen sizes
export const ResponsiveGrid = styled.div<{ columns?: number }>`
  display: grid;
  grid-template-columns: repeat(${props => props.columns || 4}, 1fr);
  gap: 20px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(${props => Math.min(props.columns || 4, 3)}, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(${props => Math.min(props.columns || 4, 2)}, 1fr);
    gap: 15px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 12px;
  }
`;

// Flexible box component with common spacing and alignment options
export const FlexBox = styled.div<{ 
  direction?: string,
  justify?: string, 
  align?: string, 
  gap?: string,
  wrap?: string
}>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  gap: ${props => props.gap || '0'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  
  @media (max-width: 768px) {
    ${props => props.direction === 'row' && `
      flex-direction: column;
    `}
  }
`;

// Button with responsive styling
export const Button = styled.button<{
  variant?: 'primary' | 'secondary' | 'outline' | 'text',
  size?: 'small' | 'medium' | 'large',
  fullWidth?: boolean
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${props => {
    switch(props.size) {
      case 'small': return '8px 16px';
      case 'large': return '12px 24px';
      default: return '10px 20px';
    }
  }};
  font-size: ${props => {
    switch(props.size) {
      case 'small': return '0.875rem';
      case 'large': return '1.125rem';
      default: return '1rem';
    }
  }};
  font-weight: 500;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  border: none;
  cursor: pointer;
  
  ${props => {
    switch(props.variant) {
      case 'secondary':
        return `
          background-color: var(--secondary-color);
          color: var(--text-color);
          &:hover {
            background-color: #e5c200;
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          border: 1px solid var(--primary-color);
          color: var(--primary-color);
          &:hover {
            background-color: rgba(0, 102, 178, 0.05);
          }
        `;
      case 'text':
        return `
          background-color: transparent;
          color: var(--primary-color);
          padding: 4px 8px;
          &:hover {
            background-color: rgba(0, 102, 178, 0.05);
          }
        `;
      default: // primary
        return `
          background-color: var(--primary-color);
          color: white;
          &:hover {
            background-color: #0056a4;
          }
        `;
    }
  }}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  @media (max-width: 480px) {
    padding: ${props => {
      switch(props.size) {
        case 'small': return '6px 12px';
        case 'large': return '10px 20px';
        default: return '8px 16px';
      }
    }};
    font-size: ${props => {
      switch(props.size) {
        case 'small': return '0.8125rem';
        case 'large': return '1rem';
        default: return '0.9375rem';
      }
    }};
  }
`;

// Card component for displaying content in a bordered box
export const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

// Text with responsive font size
export const Text = styled.p<{ 
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  weight?: string,
  color?: string,
  align?: string
}>`
  color: ${props => props.color || 'var(--text-color)'};
  font-weight: ${props => props.weight || 'normal'};
  text-align: ${props => props.align || 'left'};
  margin: 0;
  
  ${props => {
    switch(props.size) {
      case 'xs': return 'font-size: 0.75rem;';
      case 'sm': return 'font-size: 0.875rem;';
      case 'lg': return 'font-size: 1.125rem;';
      case 'xl': return 'font-size: 1.25rem;';
      default: return 'font-size: 1rem;'; // md
    }
  }}
  
  @media (max-width: 768px) {
    ${props => {
      switch(props.size) {
        case 'xs': return 'font-size: 0.7rem;';
        case 'sm': return 'font-size: 0.8125rem;';
        case 'lg': return 'font-size: 1.0625rem;';
        case 'xl': return 'font-size: 1.175rem;';
        default: return 'font-size: 0.9375rem;'; // md
      }
    }}
  }
`;

// Responsive spacing helpers
export const Spacer = styled.div<{ size: number }>`
  height: ${props => props.size}px;
  width: 100%;
  
  @media (max-width: 768px) {
    height: ${props => Math.max(props.size * 0.75, 8)}px;
  }
  
  @media (max-width: 480px) {
    height: ${props => Math.max(props.size * 0.5, 5)}px;
  }
`;

// Badge for notifications, cart items, etc.
export const Badge = styled.span<{ color?: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color || 'var(--primary-color)'};
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 50%;
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  
  @media (max-width: 480px) {
    min-width: 18px;
    height: 18px;
    font-size: 0.7rem;
  }
`;
