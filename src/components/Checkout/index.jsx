import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import * as s from "./style.module.css";

export default function Checkout() {
  const [regions, setregions] = useState([]);
  const [showRegionTab, setshowRegionTab] = useState(false);
  const [selectedRegion, setselectedRegion] = useState(null);
  const [cities, setcities] = useState([]);
  const [showcitiesTab, setshowcitiesTab] = useState(false);
  const [selectedcity, setselectedcity] = useState(null);

  //get the regions
  useEffect(() => {
    fetch("https://bdapis.herokuapp.com/api/v1.1/divisions")
      .then(res => res.json())
      .then(({ data }) => setregions(data))
      .catch(err => alert(err));
  }, []);

  //get the city
  useEffect(() => {
    setselectedcity(null);
    selectedRegion &&
      fetch(`https://bdapis.herokuapp.com/api/v1.1/division/${selectedRegion}`)
        .then(res => res.json())
        .then(({ data }) => setcities(data))
        .catch(err => alert(err));
  }, [selectedRegion]);

  const selectRegion = item => {
    setselectedRegion(item.division);
    setshowRegionTab(false);
  };

  const selectcity = item => {
    setselectedcity(item.district);
    setshowcitiesTab(false);
  };

  return (
    <section className={s.checkout_container}>
      <div className={s.checkout_wrap}>
        <div className={s.delivery_info}>
          <h3>Delivery Information</h3>

          <form>
            <div className={s.input_group}>
              <label htmlFor="name">Full name</label>
              <input placeholder="enter your full name" type="text" id="name" />
            </div>
            <div className={s.input_group}>
              <label htmlFor="Phone">Phone number</label>
              <input
                placeholder="enter your phone number"
                type="number"
                id="Phone"
              />
            </div>
            <div className={s.input_group}>
              <label>Region</label>
              <div
                onClick={() => setshowRegionTab(!showRegionTab)}
                className={s.input_outline}
              >
                <span className={s.label}>
                  {selectedRegion ? selectedRegion : "select a district"}
                </span>
                <span className={s.dropdownIcon}>
                  <IoIosArrowDown />
                </span>
              </div>

              {!regions.length || (
                <ul
                  className={`${s.regions_wrap} ${
                    !showRegionTab && s.hide_regions
                  }`}
                >
                  {regions.map(item => (
                    <li onClick={() => selectRegion(item)} key={item.id}>
                      {item.division}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className={s.input_group}>
              <label>City</label>
              <div
                onClick={() => setshowcitiesTab(!showcitiesTab)}
                className={s.input_outline}
              >
                <span className={s.label}>
                  {selectedcity ? selectedcity : "select a city"}
                </span>
                <span className={s.dropdownIcon}>
                  <IoIosArrowDown />
                </span>
              </div>

              {!cities.length || (
                <ul
                  className={`${s.cities_wrap} ${
                    !showcitiesTab && s.hide_cities
                  }`}
                >
                  {cities.map(item => (
                    <li onClick={() => selectcity(item)} key={item.id}>
                      {item.district}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className={s.input_group}>
              <label htmlFor="Address">Address</label>
              <input
                placeholder="exp: house#123, street"
                type="text"
                id="Address"
              />
            </div>
          </form>
        </div>

        <div className={s.order_sum}>
          <h3>Order summary</h3>
          <div className={s.total_item}>
            <span>Subtotal (1 items)</span>
            <span>399 TK</span>
          </div>
          <div className={s.shipping}>
            <span>Shipping fee</span>
            <span>99 TK</span>
          </div>
          <div className={s.voucer}>
            <input type="text" placeholder="voucher code" />
            <button className={s.voucer_btn}>apply</button>
          </div>
          <div className={s.total_price}>
            <span>TOTAL</span>
            <span>99 TK</span>
          </div>

          <button className={s.proceed_btn}>Proceed to pay</button>
        </div>
      </div>
    </section>
  );
}
