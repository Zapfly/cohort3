const functions = {
    makeDIV: () => {
        return document.createElement("div")    
    },
    makeOL: () => {
        let x = document.createElement("ol");
        x.setAttribute("id", "list");    
    },
    makeLI: () => {
        document.createElement("li")    
    },
}

export { functions }