export const createNewInvoice = () => {
    return {
        created: new Date(),
        client: {name: ''},
        status: "Pending",
        total_value: 0,
        items:[]
    }
}

