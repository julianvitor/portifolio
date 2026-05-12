declare module 'preact-iso' {
  import { ComponentType, VNode } from 'preact';

  export function Router(props: { children: VNode[] }): VNode;
  export function LocationProvider(props: { children: VNode }): VNode;
  export function useLocation(): { url: string; path: string; route: (to: string) => void };
  
  interface RouteProps {
    path?: string;
    default?: boolean;
    component?: ComponentType<any>;
  }

  export class Route extends preact.Component<RouteProps> {}
}
