interface MathFormulaProps {
  formula: "formula1" | "formula2";
  className?: string;
}

export function MathFormula({
  formula,
  className = "",
}: MathFormulaProps) {
  if (formula === "formula1") {
    return (
      <div
        className={`flex items-center justify-center space-x-2 ${className}`}
      >
        <span className="text-lg">Δ</span>
        <span className="text-lg italic">V</span>
        <span className="text-lg">=</span>
        <div className="flex flex-col items-center min-w-[140px]">
          <div className="flex items-center space-x-1 pb-1">
            <span className="text-lg italic">2*V</span>
            <sub className="text-sm">a</sub>
          </div>
          <div className="w-full border-t border-current my-1"></div>
          <div className="flex items-center space-x-1 pt-1">
            <span className="text-lg italic">2*Q</span>
            <sub className="text-sm">a</sub>
            <span className="text-lg">+</span>
            <span className="text-lg">Δ</span>
            <span className="text-lg italic">a</span>
         
          </div>
        </div>
        <span className="text-lg">*</span>
        <span className="text-lg">Δ</span>
        <span className="text-lg italic">a</span>
      </div>
    );
  }

  if (formula === "formula2") {
    return (
      <div
        className={`flex items-center justify-center space-x-2 ${className}`}
      >
        <span className="text-lg">Δ</span>
        <span className="text-lg italic">b</span>
        <span className="text-lg">=</span>
        <div className="flex flex-col items-center min-w-[140px]">
          <div className="flex items-center space-x-1 pb-1">
            <span className="text-lg italic">2*Q</span>
            <sub className="text-sm">b</sub>
          </div>
          <div className="w-full border-t border-current my-1"></div>
          <div className="flex items-center space-x-1 pt-1">
            <span className="text-lg italic">2*V</span>
            <sub className="text-sm">b</sub>
            <span className="text-lg">+</span>
            <span className="text-lg">Δ</span>
            <span className="text-lg italic">V</span>
          </div>
        </div>
        <span className="text-lg">*</span>
        <span className="text-lg">Δ</span>
        <span className="text-lg italic">V</span>
      </div>
    );
  }

  return null;
}