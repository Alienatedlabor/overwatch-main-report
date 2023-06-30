interface ButtonProps {
  label: string;
  onClick: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
}

const Button = ({ label, onClick, isDisabled, isLoading }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-orange-500 hover:bg-yellow-600 text-white font-bold py-1 px-4"
      disabled={isDisabled || isLoading}
    >
      {isLoading ? 'Loading...' : label}
    </button>
  );
};

export default Button;
