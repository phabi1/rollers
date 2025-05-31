export interface Action {
    name: string;
    label: string;
    primary?: boolean;
    handle: () => void;
}