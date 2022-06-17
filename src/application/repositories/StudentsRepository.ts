import { Student } from "../../domain/entities/student";

// Isto não é implementação do repositório, mas sim abstração
// É só um "contrato"
export interface StudentsRepository {
    findById(id: string): Promise<Student | null>;
}