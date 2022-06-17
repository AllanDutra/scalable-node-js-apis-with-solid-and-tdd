import { Entity } from "../../core/domain/Entity";

type StudentProps = {
    name: string;
    email: string;
};

export class Student extends Entity<StudentProps> {
    // private para nunca instanciar fora da classe
    private constructor(props: StudentProps, id?: string) {
        super(props, id);
    }

    // static para ser chamado sem instanciar a classe
    static create(props: StudentProps, id?: string) {
        const student = new Student(props, id);

        return student;
    }
}