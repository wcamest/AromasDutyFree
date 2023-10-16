const Utils = {
    FormatCurrency(value:number){
        let formatted = (Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'COP',
          })).format(value)

        formatted = formatted.replace(/COP\s*/, "");
        formatted = formatted.replace(".00", "");

        return formatted;
    }
}

export default Utils;