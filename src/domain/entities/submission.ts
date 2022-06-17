import { Entity } from "../../core/domain/Entity";

type SubmissionProps = {
    challengeId: string;
    studentId: string;
    createdAt?: Date;
};

export class Submission extends Entity<SubmissionProps> {
    // private para nunca instanciar fora da classe
    private constructor(props: SubmissionProps, id?: string) {
        super(props, id);
    }

    // static para ser chamado sem instanciar a classe
    static create(props: SubmissionProps, id?: string) {
        const submission = new Submission({
            ...props,
            createdAt: props.createdAt ?? new Date(),
        }, id);

        return submission;
    }
}