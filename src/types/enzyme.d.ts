export interface ShallowRendererProps {
  disableLifecycleMethods?: boolean;
  /**
   * Enable experimental support for full react lifecycle methods
   */
  lifecycleExperimental?: boolean;
  /**
   * Context to be passed into the component
   */
  context?: {};
}