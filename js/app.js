const app = new Vue({
    el: "#app",
    data: {
        title: "Fórmula de bhaskara",
        varA: null,
        varB: null,
        varC: null,
        x1: null,
        x2: null,
        showResult: false,
        deltaPositivo: null,
    },
    methods: {
        calc() {
            const target = document.querySelector('.result-area');
            if (!this.varA || !this.varB || !this.varC)
                return alert("Você precisa inserir os valores!");

            if (target.children.length > 1) {
                target.textContent="";
            }

            this.showResult = true;
            const delta = Math.pow(this.varB, 2) - (4 * this.varA * this.varC);
            
            const step1 = `Δ = ${this.varB}² - 4.${this.varA}.${this.varC}`;
            const step2 = `Δ = ${Math.pow(this.varB, 2)} - 4.${this.varA * this.varC}`;
            const step3 = `Δ = ${Math.pow(this.varB, 2)} - ${4 * this.varA * this.varC}`;
            const step4 = `Δ = ${delta}`;

            const steps = [
                step1,
                step2,
                step3,
                step4
            ];

            const step1X = `X = (-${parseInt(this.varB)} ± √${delta}) / 2.${parseInt(this.varA)}`;
            const step2X = `X = (${-parseInt(this.varB)} ± ${parseFloat(Math.sqrt(delta).toFixed(2))}) / ${2 * parseInt(this.varA)}`;

            const x1 = `XI = (${-parseInt(this.varB)} + ${parseFloat(Math.sqrt(delta).toFixed(2))}) / ${2 * parseInt(this.varA)}`;
            const x1Divisor = `XI = ${(-parseInt(this.varB)) + parseFloat(Math.sqrt(delta).toFixed(2))} / ${2 * parseInt(this.varA)}`;
            const x1Result = `XI = ${(-parseInt(this.varB) + (parseFloat(Math.sqrt(delta).toFixed(2)))) / (2 * parseInt(this.varA))}`;

            const x2 = `XI = (${-parseInt(this.varB)} - ${parseFloat(Math.sqrt(delta).toFixed(2))}) / ${2 * parseInt(this.varA)}`;
            const x2Divisor = `XII = ${-parseInt(this.varB) - parseFloat(Math.sqrt(delta).toFixed(2))} / ${2 * parseInt(this.varA)}`;
            const x2Result = `XII = ${(-parseInt(this.varB) - parseFloat(Math.sqrt(delta).toFixed(2))) / (2 * parseInt(this.varA))}`;

            this.x1 = (-parseInt(this.varB) + parseFloat(Math.sqrt(delta).toFixed(2))) / (2 * parseInt(this.varA));
            this.x2 = (-parseInt(this.varB) - parseFloat(Math.sqrt(delta).toFixed(2))) / (2 * parseInt(this.varA));

            const stepsX = [
                step1X,
                step2X,
                x1,
                x1Divisor,
                x1Result,
                x2,
                x2Divisor,
                x2Result
            ];

            this.addSteps(steps, stepsX);
        },
        addSteps(steps, steps2) {
            const target = document.querySelector('.result-area');
            const spanDelta = document.createElement('span');
            target.appendChild(spanDelta);
            spanDelta.textContent = "Calculando o Δ...";

            for (let i in steps) {
                const span = document.createElement('span');
                span.textContent = steps[i];
                target.appendChild(span);
            };

            const delta = Math.pow(this.varB, 2) - (4 * this.varA * this.varC);
            if (delta > 0) {
                this.deltaPositivo = true;
                const spanX = document.createElement('span');
                spanX.textContent = "Calculando o X...";
                target.appendChild(spanX);
                for (let i in steps2) {
                    const span = document.createElement('span');
                    span.textContent = steps2[i];
                    target.appendChild(span);
                };
            } else if (delta < 0) {
                this.deltaPositivo = false;
                const span = document.createElement('span');
                span.textContent = "O delta é negativo. Equação não possui raízes reais.";
                target.appendChild(span);
            };
        },
        redo() {
            const target = document.querySelector('.result-area');
            this.showResult = false;
            target.textContent = "O resultado virá aqui.";
            this.varA = null;
            this.varB = null;
            this.varC = null;
            this.deltaPositivo = null;
        },
        checkInput() {
            const calcBtn = document.querySelector('.calc-action');
            if (this.varA && this.varB && this.varC) {
                calcBtn.removeAttribute('disabled');
            } else if (!this.varA || !this.varB || !this.varC){
                calcBtn.setAttribute("disabled", "disabled")
            }
        }
    }
});