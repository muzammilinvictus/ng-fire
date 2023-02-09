export class Exercise{
    id?: number;
    name?: string;
    duration?: number;
    calories?: number;
    date?: string;
    state?: 'completed' | 'cancelled' | null;
}