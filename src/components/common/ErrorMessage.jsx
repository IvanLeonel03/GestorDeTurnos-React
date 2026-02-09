// ErrorMessage.jsx
const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <span className="text-red-600">⚠️</span>
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">Error</h3>
          <div className="mt-2 text-sm text-red-700">
            <p>{message}</p>
          </div>
          {onRetry && (
            <button
              onClick={onRetry}
              className="mt-3 text-sm font-medium text-red-800 hover:text-red-900"
            >
              Reintentar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;