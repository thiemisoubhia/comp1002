
const quantityInput = document.getElementById('quantity');
const pizzaFormsContainer = document.getElementById('pizza-forms');

// Modelo de um form para uma pizza
function createPizzaForm(pizzaNumber) {
    const div = document.createElement('div');
    div.classList.add('form-adapt');
    div.innerHTML = `
      <h3>Pizza ${pizzaNumber}</h3>
      <div>
                        <label>Shape?</label><br>
                        <label><input type="radio" name="dinning-preference[]" value="round">Round</label>
                        <label><input type="radio" name="dinning-preference[]" value="square">Square</label>
                        <label><input type="radio" name="dinning-preference[]" value="retangular">Retangular</label>
                        <label><input type="radio" name="dinning-preference[]" value="heart">Heart</label>
                    </div>
                    <div>
                        <label for="pizza-size">Choose Size</label>
                        <select id="pizza-size" name="pizza-size">
                            <option>Small - 8”</option>
                            <option>Medium - 12”</option>
                            <option>Large - 16”</option>
                        </select>
                    </div>

                    <div>
                        <label>Toppings</label><br>
                        <p>Choose 3 toopings to create the best pizza!</p>
                        <label><input type="checkbox" name="pizza-topping" value="pepperoni"> Pepperoni
                            Power</label>
                        <label><input type="checkbox" name="pizza-topping" value="pineapple"> Pineapple
                            Party</label>
                        <label><input type="checkbox" name="pizza-topping" value="extra-cheese"> Extra
                            Cheesy</label>
                        <label><input type="checkbox" name="pizza-topping" value="mushrooms"> Magical
                            Mushrooms</label>
                        <label><input type="checkbox" name="pizza-topping" value="onions"> Onion
                            Overload</label>
                        <label><input type="checkbox" name="pizza-topping" value="green-peppers"> Green
                            Pepper
                            Delight</label>
                        <label><input type="checkbox" name="pizza-topping" value="black-olives"> Olive
                            Obsession</label>
                        <label><input type="checkbox" name="pizza-topping" value="bacon"> Bacon
                            Bonanza</label>
                        <label><input type="checkbox" name="pizza-topping" value="sausage"> Savory
                            Sausage</label>
                        <label><input type="checkbox" name="pizza-topping" value="spinach"> Spinach
                            Supreme</label>
                    </div>

                    <div>
                        <label for="pizza-crust">Choose the Crust type</label>
                        <select id="pizza-crust" name="pizza-crust">
                            <option>Deep dish</option>
                            <option>Thin crust</option>
                            <option>Stuffed crust</option>
                            <option>Thick crust</option>
                        </select>
                    </div>
    `;
    return div;
}

// Quando o usuário altera o número de pizzas
quantityInput.addEventListener('input', () => {
    pizzaFormsContainer.innerHTML = ''; // limpa
    const quantity = parseInt(quantityInput.value);
    if (quantity > 0 && quantity <= 5) {
        for (let i = 1; i <= quantity; i++) {
            pizzaFormsContainer.appendChild(createPizzaForm(i));
        }
    }
});
