export class Cart {
  constructor(
    public id?: number,
    public productname?: string,
    public price?: number,
    public amount?: number,
    public total?: number,
    public input_quantity?: number
  ) {}
}
