const functions = {
    countElementByTagName: (x) => {
        return document.body.querySelectorAll(x).length
    },

    makeElement: (x) => {
        let y = document.createElement(x);
        y.setAttribute("id", x + functions.countElementByTagName(x))
        return y
    },

}

export { functions }