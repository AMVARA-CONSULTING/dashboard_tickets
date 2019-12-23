import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Config } from '@other/interfaces';

export class SetConfig {
    static readonly type = '[CONFIG] Set';
    constructor(public config: Config) {}
}

export class UpdateConfig {
    static readonly type = '[CONFIG] Update';
    constructor(public updates: any) {}
}

@State<Config>({
  name: 'config',
  defaults: {}
})
export class ConfigState {
    @Action(SetConfig)
    setConfig({ setState }: StateContext<Config>, { config }: SetConfig) {
        setState(config)
    }

    @Action(UpdateConfig)
    updateConfig({ patchState }: StateContext<Config>, { updates }: UpdateConfig) {
        patchState(updates)
    }

    @Selector()
    static getLanguage(state: Config) {
        return state.language
    }
}