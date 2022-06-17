import { Entity } from "../../core/domain/Entity";

type ChallengeProps = {
    title: string;
    instructionsUrl: string;
};

export class Challenge extends Entity<ChallengeProps> {
    // private para nunca instanciar fora da classe
    private constructor(props: ChallengeProps, id?: string) {
        super(props, id);
    }

    // static para ser chamado sem instanciar a classe
    static create(props: ChallengeProps, id?: string) {
        const challenge = new Challenge(props, id);

        return challenge;
    }
}