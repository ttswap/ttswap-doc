import { ReactNode } from "react";
import "../../css/ttswap-isolated.css";

interface TTSwapWrapperProps {
  children: ReactNode;
  className?: string;
}

/**
 * TTSwap样式隔离包装器
 * 
 * 使用方法：
 * 当将TTSwap组件导入到其他项目时，用这个包装器包裹：
 * 
 * ```tsx
 * import { TTSwapWrapper } from './components/TTSwapWrapper';
 * import App from './App';
 * 
 * function MyApp() {
 *   return (
 *     <TTSwapWrapper>
 *       <App />
 *     </TTSwapWrapper>
 *   );
 * }
 * ```
 * 
 * 这样可以确保TTSwap的样式不会与其他项目的样式发生冲突。
 */
export function TTSwapWrapper({ children, className = "" }: TTSwapWrapperProps) {
  return (
    <div className={`ttswap-app ${className}`}>
      {children}
    </div>
  );
}

export default TTSwapWrapper;