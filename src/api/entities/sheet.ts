export class Sheet {
    public readonly id: number;
    public name: string;

    constructor(props: Omit<Sheet, 'id'>, id?: number) {
        this.name = props.name;
        this.id = id || Math.floor(Math.random() * 100);
    }
}