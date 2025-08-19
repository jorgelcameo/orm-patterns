class City {
  db = [
    {id: 1, name: 'New York'},
    {id: 2, name: 'Los Angeles'},
  ];

  constructor(
    public id: number,
    public name: string
  ) {}

  find(id: number): any {
    const found = this.db.find(city => city.id === id);
    return found;
  }

  save(): void {
    this.db.push({id: this.id, name: this.name});
  }
}

export const run = () => {
  const city = new City(3, 'Asuncion');
  city.save();
  console.log(city.find(3));
};
