import { Entity } from "../../core/domain/Entity";

type CorrectionProps = {
    grade: number;
    submissionId: string;
    createdAt: Date;
};

export class Correction extends Entity<CorrectionProps> {
    // private para nunca instanciar fora da classe
    private constructor(props: CorrectionProps, id?: string) {
        super(props, id);
    }

    // static para ser chamado sem instanciar a classe
    static create(props: CorrectionProps, id?: string) {
        const correction = new Correction(props, id);

        return correction;
    }
}