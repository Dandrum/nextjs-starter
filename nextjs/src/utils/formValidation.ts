const validate = (value:{[key: string]: string|number|null } , type:any = null, required = false) => {
    if (required) {
        if (!value) {
            return 'Required'
        }
    }

    switch (type) {
        default:
            return null
    }
}

export default validate
