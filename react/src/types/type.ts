
export type Action =
  | { type: 'updateField'; field: 'name' | 'email' | 'message'; value: string }
  | { type: 'reset' };
  
export interface State {
  name: string;
  email: string;
  message: string;
}
