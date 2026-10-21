import { Admin } from '../src/models/Admin';
import {Supervisor} from '../src/models/Supervisor'
import { Armazenamento } from '../src/services/Armazenamento'
import { EmployeeService } from '../src/services/EmployeeService'


describe('Testes Eduardo', () => {
    test('CT08 - Consultar os dados do usuário', () => {
        const admin = new Admin(1, 'jennifer apollo', 'japollo@email.com');
      
        expect(admin.getId()).toBe(1);
        expect(admin.getName()).toBe('jennifer apollo');
        expect(admin.getEmail()).toBe('japollo@email.com');
        expect(admin.getRole()).toBe('ADMIN')})

    test('CT19 - Rejeitar dados inválidos nas classes derivadas', () => {
        expect(() => {new Supervisor(0, 'eduardo alfonso', 'eduardoa@email.com')}).toThrow();
        expect(() => {new Supervisor(1, 'arthur apollo', 'email-invalido')}).toThrow()})

    test("CT53 - Cadastrar supervisor com permissão válida", () => {
        const armazenamento = new Armazenamento();
        const service = new EmployeeService(armazenamento);
        const admin = new Admin(1,"jennifer apollo","japollo@email.com");
        const supervisor = service.registerUser(admin,"SUPERVISOR",2,"Eduardo Alfonso","eduardoa@email.com");
       
        expect(supervisor).toBeInstanceOf(Supervisor);
        expect(supervisor.getId()).toBe(2);
        expect(supervisor.getRole()).toBe("SUPERVISOR");
        expect(armazenamento.findUserById(2)).toBe(supervisor)})


    test("CT58 - Rejeitar cadastro de funcionário sem departamento", () => {
        const armazenamento = new Armazenamento();
        const service = new EmployeeService(armazenamento);
        const admin = new Admin(1,"jennifer apollo","japollo@email.com");
      
        expect(() => {service.registerUser(admin,"EMPLOYEE",2,"Aphelios","aphelios@email.com",2500)}).toThrow();
        expect(armazenamento.getUserCount()).toBe(0)});
})