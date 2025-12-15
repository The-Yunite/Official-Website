import React, { lazy, Suspense } from 'react';
import { AlertTriangle, LucideProps } from 'lucide-react';
import type * as LucideIcons from 'lucide-react'; // Import types only

// --- Utility Types ---

// 1. Define the specific type for a Lucide Icon component.
type LucideIconComponent = React.FC<LucideProps> | React.ForwardRefExoticComponent<LucideProps>;

// 2. Define props for the component
interface DynamicLucideIconProps extends LucideProps {
  iconName: keyof typeof LucideIcons | null | undefined | string;
}

// 3. Fallback component for the Suspense boundary
const LoadingFallback: React.FC<Pick<LucideProps, 'size' | 'color'>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={props.size || 24} 
    height={props.size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={props.color || 'currentColor'} 
    strokeWidth="2"
    className="animate-pulse"
  >
    <circle cx="12" cy="12" r="10" strokeDasharray="60 40" opacity="0.3"/>
  </svg>
);

const DynamicLucideIcon: React.FC<DynamicLucideIconProps> = ({
  iconName,
  ...props
}) => {
  if (!iconName) {
    return null;
  }

  // --- Dynamic Import & Type Resolution ---
  const LazyIcon = lazy(() => 
    import('lucide-react')
      .then(module => {
        // Look up the component by name and assert its type
        const Component = module[iconName as keyof typeof module] as LucideIconComponent | undefined;

        if (Component) {
          // Wrap the component in a default export for React.lazy
          return { default: Component };
        } 
        
        // If the name is valid but the lookup failed (e.g., internal component), 
        // throw an error to trigger the catch block.
        throw new Error(`Component not found for name: ${iconName}`);
      })
      .catch((error) => {
        console.error('Lazy loading error:', error.message);
        // Fallback component for an invalid iconName (safe to render)
        return { 
          default: (p: LucideProps) => (
            <AlertTriangle {...p} className="text-red-500"/>
          )
        };
      })
  );

  // --- Rendering ---
  return (
    <Suspense fallback={<LoadingFallback size={props.size} color={props.color} />}>
      <LazyIcon {...props} />
    </Suspense>
  );
};

export default DynamicLucideIcon;