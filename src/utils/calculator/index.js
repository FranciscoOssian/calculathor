class calculator {
    constructor(expression) {
        this.whiteList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '*', '/', '-', '.', '(', ')', '**', '%']
        this.whiteListStr = this.whiteList.join('')
        this.expression = ''
        this.result = ''

        if (expression !== undefined) return this.calculate()
    }
    calculate(exp) {
        let valideExpInternal = this.validateExpression(this.expression)
        let valideExpParameter = this.validateExpression(exp)
        let my_exp
        let my_result

        if (!valideExpInternal && !valideExpParameter) return 
        if (!valideExpInternal && valideExpParameter) {
            my_exp = exp
            my_result = eval(exp)
        }
        if (valideExpInternal && !valideExpParameter) {
            my_exp = this.expression
            my_result = eval(this.expression)
        }

        this.result = my_result
        this.expression = my_exp
        return this.result
    }
    addKey(token) {
        if (typeof token === 'number') token = token.toString()
        token = token.replace(' ', '')
        let is_valide = this.validateToken(token)
        if (is_valide) this.expression = this.expression + token
    }
    removeKey(index) {
        listOfTokens = this.expression.split
    }
    validateExpression(exp) {
        if (typeof exp !== 'string') return false
        let resp
        try {
            resp = eval(exp)
        }
        catch (err) { return false }
        if (typeof resp !== 'number') return false
        return true
    }
    validateToken(token) {
        if (typeof token !== 'string' && typeof token !== 'number') return false
        const keys = this.whiteListStr
        if (keys.indexOf(token) === -1) return false

        return true
    }
    clear() {
        this.expression = ''
        this.result = ''
    }
}

export default calculator