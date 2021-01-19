import { useState } from "react";

export default function Prices(props) {
  const [currency, setCurrency] = useState("USD");
  return (
    <div>
      <ul class="list-group">
        {currency === "USD" && (
          <li class="list-group-item">
            Bitcoin rate for {props.bpi.bpi.USD.description}:{" "}
            <span class="badge badge-primary">{props.bpi.bpi.USD.code}</span>{" "}
            <strong>{props.bpi.bpi.USD.rate}</strong>
          </li>
        )}
        {currency === "GBP" && (
          <li class="list-group-item">
            Bitcoin rate for {props.bpi.bpi.GBP.description}:{" "}
            <span class="badge badge-primary">{props.bpi.bpi.GBP.code}</span>{" "}
            <strong>{props.bpi.bpi.GBP.rate}</strong>
          </li>
        )}
        {currency === "EUR" && (
          <li class="list-group-item">
            Bitcoin rate for {props.bpi.bpi.EUR.description}:{" "}
            <span class="badge badge-primary">{props.bpi.bpi.EUR.code}</span>{" "}
            <strong>{props.bpi.bpi.EUR.rate}</strong>
          </li>
        )}
        <div className="form-group">
          <label for="currencySelect">Choose currency: </label>
          <select
            class="form-control"
            id="currencySelect"
            className="form-control"
            onChange={(event) => setCurrency(event.target.value)}
          >
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      </ul>
    </div>
  );
}
