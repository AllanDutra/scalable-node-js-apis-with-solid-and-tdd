import { Challenge } from "../../domain/entities/challenge";

// Isto não é implementação do repositório, mas sim abstração
// É só um "contrato"
export interface ChallengesRepository {
    findById(id: string): Promise<Challenge | null>;
}