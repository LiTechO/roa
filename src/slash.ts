import { ChatInputCommandInteraction } from "discord.js";

export interface SlashCommandOptions {
    name: string;
    description: string;
    args: SlashCommandArgument[];
}

export class SlashCommand {
    public name: string;
    public description: string;
    public args: SlashCommandArgument[];

    public constructor(public readonly options: SlashCommandOptions) {
        this.name = options.name;
        this.description = options.description;
        this.args = options.args;
    }

    /**
     * Override this method to implement your own command logic.
     * 
     * @param interaction The interaction object.
    **/
    public async execute(interaction: ChatInputCommandInteraction): Promise<void> {}

}

export class SlashCommandArgument {}
