import React from 'react';

const Form = () =>
    <div>
        <form>
            <label>
                City:
                <input
                    type="text"
                    name="city"
                    placeholder="Enter City..."
                />
            </label>
            <label>
                Country:
                <input
                    type="text"
                    name="country"
                    placeholder="Enter Country..."
                />
            </label>
            <input type="submit" value="submit" />
        </form>
    </div>

export default Form;