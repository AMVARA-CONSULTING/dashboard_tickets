import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Config } from '@other/interfaces';

export interface Tickets {
    // Contains all tickets classified per month,
    // it is only filled every time a new month is selected
    // acts as a backup to not reload tickets previously requested
    ticketsBackup?: any
    // Contains all tickets for the current month
    tickets?: any[]
    // Same as above but with just basic fields
    ticketsReduced?: any[]
    // Contains the data for the System page
    system?: any[]
    // Overview data for the L1 view
    chart?: any[]
    priority?: any[]
    service?: any[]
    silt?: any[]
    status?: any[]
    type?: any[]
    overall?: any[]
}

export class UpdateTickets {
    static readonly type = '[TICKETS] Update';
    constructor(public payload: Tickets) {}
}

export class SetMonthTickets {
    static readonly type = '[TICKETS] Set Month Tickets';
    constructor(public monthIndex: number, public tickets: any[]) {}
}


@State<Tickets>({
    name: 'tickets',
    defaults: {
        system: [],
        tickets: [],
        ticketsBackup: {},
        ticketsReduced: []
    }
})
export class TicketsState {
    @Action(UpdateTickets)
    setConfig({ patchState }: StateContext<Tickets>, { payload }: UpdateTickets) {
        patchState(payload)
    }

    @Action(SetMonthTickets)
    setMonthTickets({ patchState, getState}: StateContext<Tickets>, { monthIndex, tickets }: SetMonthTickets) {
        patchState({
            ticketsBackup: {
                ...getState().ticketsBackup,
                [monthIndex]: tickets
            }
        })
    }

    @Selector()
    static StackedChart(state: Tickets) {
        return state.chart
    }

    @Selector()
    static Section1(state: Tickets) {
        return state.system.filter(row => row[0] == 'S1')
    }

    @Selector()
    static Section2(state: Tickets) {
        return state.system.filter(row => row[0] == 'S2')
    }

    @Selector()
    static Section3(state: Tickets) {
        return state.system.filter(row => row[0] == 'S3')
    }

    @Selector()
    static Section4(state: Tickets) {
        return state.system.filter(row => row[0] == 'S4')
    }

    @Selector()
    static Section5(state: Tickets) {
        return state.system.filter(row => row[0] == 'S5')
    }
}