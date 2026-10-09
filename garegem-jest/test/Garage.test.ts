import { Car } from "../src/Car";
import { Garage } from "../src/Garage";

describe("Carro", () => {
  test("deve criar um carro corretamente", () => {
    const carro = new Car("Toyota", "Corolla", 2025);

    expect(carro).toBeInstanceOf(Car);
    expect(carro.getBrand()).toBe("Toyota");
    expect(carro.getModel()).toBe("Corolla");
    expect(carro.getYear()).toBe(2025);
  });

  test("deve iniciar com stored igual a false", () => {
    const carro = new Car("Toyota", "Corolla", 2025);

    expect(carro.isStored()).toBe(false);
  });

  test("deve alterar stored para true", () => {
    const carro = new Car("Toyota", "Corolla", 2025);

    carro.setStored(true);

    expect(carro.isStored()).toBe(true);
  });

  test("deve alterar stored para false após estar true", () => {
    const carro = new Car("Toyota", "Corolla", 2025);

    carro.setStored(true);
    carro.setStored(false);

    expect(carro.isStored()).toBe(false);
  });
});

describe("Garagem", () => {
  test("deve adicionar um carro à garagem", () => {
    const garagem = new Garage();
    const carro = new Car("Toyota", "Corolla", 2025);

    garagem.addCar(carro);

    expect(garagem.getCarCount()).toBe(1);
  });

  test("deve definir stored como true ao adicionar um carro", () => {
    const garagem = new Garage();
    const carro = new Car("Toyota", "Corolla", 2025);

    garagem.addCar(carro);

    expect(carro.isStored()).toBe(true);
  });

  test("deve adicionar três carros à garagem", () => {
    const garagem = new Garage();

    garagem.addCar(new Car("Toyota", "Corolla", 2025));
    garagem.addCar(new Car("Ford", "Mustang", 2024));
    garagem.addCar(new Car("Honda", "Civic", 2023));

    expect(garagem.getCarCount()).toBe(3);
  });

  test("deve remover um carro da garagem", () => {
    const garagem = new Garage();
    const carro = new Car("Toyota", "Corolla", 2025);

    garagem.addCar(carro);
    garagem.removeCar(carro);

    expect(garagem.getCarCount()).toBe(0);
  });

  test("deve definir stored como false ao remover um carro", () => {
    const garagem = new Garage();
    const carro = new Car("Toyota", "Corolla", 2025);

    garagem.addCar(carro);
    garagem.removeCar(carro);

    expect(carro.isStored()).toBe(false);
  });

  test("deve encontrar um carro existente pelo modelo", () => {
    const garagem = new Garage();
    const carro = new Car("Toyota", "Corolla", 2025);

    garagem.addCar(carro);

    expect(garagem.findCarByModel("Corolla")).toBe(carro);
  });

  test("deve retornar undefined para um modelo inexistente", () => {
    const garagem = new Garage();

    expect(garagem.findCarByModel("Ferrari")).toBeUndefined();
  });

  test("deve lançar um erro ao adicionar um carro duplicado", () => {
    const garagem = new Garage();
    const carro1 = new Car("Toyota", "Corolla", 2025);
    const carro2 = new Car("Toyota", "Corolla", 2025);

    garagem.addCar(carro1);

    expect(() => garagem.addCar(carro2)).toThrow();
    expect(garagem.getCarCount()).toBe(1);
  });

  test("deve retornar a marca correta do carro encontrado", () => {
    const garagem = new Garage();
    const carro = new Car("Honda", "Civic", 2023);

    garagem.addCar(carro);

    const carroEncontrado = garagem.findCarByModel("Civic");

    expect(carroEncontrado?.getBrand()).toBe("Honda");
  });

  test("deve retornar o ano correto do carro encontrado", () => {
    const garagem = new Garage();
    const carro = new Car("Ford", "Mustang", 2024);

    garagem.addCar(carro);

    const carroEncontrado = garagem.findCarByModel("Mustang");

    expect(carroEncontrado?.getYear()).toBe(2024);
  });

  test("deve manter os outros carros após remover um deles", () => {
    const garagem = new Garage();
    const carro1 = new Car("Toyota", "Corolla", 2025);
    const carro2 = new Car("Ford", "Mustang", 2024);
    const carro3 = new Car("Honda", "Civic", 2023);

    garagem.addCar(carro1);
    garagem.addCar(carro2);
    garagem.addCar(carro3);

    garagem.removeCar(carro2);

    expect(garagem.getCarCount()).toBe(2);
    expect(garagem.findCarByModel("Corolla")).toBe(carro1);
    expect(garagem.findCarByModel("Civic")).toBe(carro3);
    expect(garagem.findCarByModel("Mustang")).toBeUndefined();
  });

  test("deve atualizar corretamente os estados após remover um carro", () => {
    const garagem = new Garage();
    const carro1 = new Car("Toyota", "Corolla", 2025);
    const carro2 = new Car("Ford", "Mustang", 2024);
    const carro3 = new Car("Honda", "Civic", 2023);

    garagem.addCar(carro1);
    garagem.addCar(carro2);
    garagem.addCar(carro3);

    garagem.removeCar(carro2);

    expect(carro2.isStored()).toBe(false);
    expect(carro1.isStored()).toBe(true);
    expect(carro3.isStored()).toBe(true);
  });
});