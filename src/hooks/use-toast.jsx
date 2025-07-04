import { toast as sonnerToast } from 'sonner';

export const useToast = () => {
  const toast = ({ title, description, variant = 'default', duration = 3000 }) => {
    sonnerToast(title, {
      description,
      duration,
      className:
        variant === 'destructive'
          ? 'bg-red-600 text-white border-none'
          : 'bg-white text-black',
    });
  };

  return { toast };
};
