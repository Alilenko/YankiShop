import { createSlice } from "@reduxjs/toolkit";
import rect1 from "../assets/image/one.jpg";
import rect2 from "../assets/image/Rectangle 21.jpg";
import rect3 from "../assets/image/Rectangle 22.jpg";
import rect4 from "../assets/image/Rectangle 23.jpg";
import rect5 from "../assets/image/Rectangle 24.jpg";
import rect6 from "../assets/image/Rectangle 25.jpg";
import img2 from "../assets/image/productItem/Rectangle 11.jpg";
import img3 from "../assets/image/productItem/Rectangle 10.jpg";
import img4 from "../assets/image/productItem/Rectangle 9.jpg";
import img5 from "../assets/image/productItem/Rectangle 7.jpg";

const initialState = {
  goods: [
    {
      id: 77667888765,
      title: "Кремовое пальто",
      img: [
        {
          img: rect1,
          imgBig: rect1,
        },
        {
          img: rect2,
          imgBig: rect2,
        },
        {
          img: rect3,
          imgBig: rect3,
        },
        {
          img: rect4,
          imgBig: rect4,
        },
        {
          img: rect5,
          imgBig: rect5,
        },
        {
          img: rect6,
          imgBig: rect6,
        },
      ],
      price: 3150,
      color: [
        {
          name: "#fff",
          colorDeckr: "",
        },
        {
          name: "#6F83A4",
          colorDeckr: "",
        },
        {
          name: "#F1DDAA",
          colorDeckr: "Кофе с молоком меланж",
        },
      ],
      size: [{ size: "S" }, { size: "M" }, { size: "L" }],
      description: "Lorem",
      category: "coat",
      compound: [
        { p: "Состав: 50% Шерсть, 50% Полиэстер" },
        { p: "Подкладка: 100% Полиэстер Утеплитель" },
        { p: "Утеплитель: 90% Пух, 10% Перо" },
      ],
      care: [
        { p: "Не стирать" },
        { p: "Гладить при температуре утюга до 110°C" },
        { p: "Не отбеливать" },
        { p: "Сухая чистка (химчистка)" },
        { p: "Барабанная сушка запрещена" },
      ],
    },
    {
      id: 345678789878,
      title: "Белая куртка",
      img: [
        {
          img: img2,
          imgBig: img2,
        },
        {
          img: img2,
          imgBig: img2,
        },
        {
          img: img2,
          imgBig: img2,
        },
        {
          img: img2,
          imgBig: img2,
        },
        {
          img: img2,
          imgBig: img2,
        },
      ],
      price: 2900,
      color: [
        {
          name: "#fff",
          colorDeckr: "",
        },
        {
          name: "#6F83A4",
          colorDeckr: "",
        },
        {
          name: "#F1DDAA",
          colorDeckr: "Кофе с молоком меланж",
        },
      ],
      size: [
        { size: "XXS" },
        { size: "XS" },
        { size: "S" },
        { size: "M" },
        { size: "L" },
      ],
      description: "Lorem",
      category: "jackets",
      compound: [
        { p: "Состав: 50% Шерсть, 50% Полиэстер" },
        { p: "Подкладка: 100% Полиэстер Утеплитель" },
        { p: "Утеплитель: 90% Пух, 10% Перо" },
      ],
      care: [
        { p: "Не стирать" },
        { p: "Гладить при температуре утюга до 110°C" },
        { p: "Не отбеливать" },
        { p: "Сухая чистка (химчистка)" },
        { p: "Барабанная сушка запрещена" },
      ],
    },
    {
      id: 98765678,
      title: "Синее пальто",
      img: [
        {
          img: img3,
          imgBig: img3,
        },
        {
          img: img3,
          imgBig: img3,
        },
        {
          img: img3,
          imgBig: img3,
        },
      ],
      price: 3150,
      color: [
        {
          name: "#fff",
          colorDeckr: "",
        },
        {
          name: "#6F83A4",
          colorDeckr: "",
        },
        {
          name: "#F1DDAA",
          colorDeckr: "Кофе с молоком меланж",
        },
      ],
      size: [{ size: "S" }, { size: "M" }, { size: "L" }],
      description: "Lorem",
      category: "coat",
      compound: [
        { p: "Состав: 50% Шерсть, 50% Полиэстер" },
        { p: "Подкладка: 100% Полиэстер Утеплитель" },
        { p: "Утеплитель: 90% Пух, 10% Перо" },
      ],
      care: [
        { p: "Не стирать" },
        { p: "Гладить при температуре утюга до 110°C" },
        { p: "Не отбеливать" },
        { p: "Сухая чистка (химчистка)" },
        { p: "Барабанная сушка запрещена" },
      ],
    },
    {
      id: 4567890,
      title: "Синяя парка",
      img: [
        {
          img: img4,
          imgBig: img4,
        },
        {
          img: img4,
          imgBig: img4,
        },
        {
          img: rect3,
          imgBig: rect3,
        },
        {
          img: rect4,
          imgBig: rect4,
        },
        {
          img: rect5,
          imgBig: rect5,
        },
        {
          img: rect6,
          imgBig: rect6,
        },
      ],
      price: 4200,
      color: [
        {
          name: "#fff",
          colorDeckr: "",
        },
        {
          name: "#6F83A4",
          colorDeckr: "",
        },
        {
          name: "#F1DDAA",
          colorDeckr: "Кофе с молоком меланж",
        },
      ],
      size: [{ size: "S" }, { size: "M" }, { size: "L" }],
      description: "Lorem",
      category: "jackets",
      compound: [
        { p: "Состав: 50% Шерсть, 50% Полиэстер" },
        { p: "Подкладка: 100% Полиэстер Утеплитель" },
        { p: "Утеплитель: 90% Пух, 10% Перо" },
      ],
      care: [
        { p: "Не стирать" },
        { p: "Гладить при температуре утюга до 110°C" },
        { p: "Не отбеливать" },
        { p: "Сухая чистка (химчистка)" },
        { p: "Барабанная сушка запрещена" },
      ],
    },
    {
      id: 66765678,
      title: "Бежевая шуба",
      img: [
        {
          img: img5,
          imgBig: img5,
        },
        {
          img: rect2,
          imgBig: rect2,
        },
        {
          img: rect3,
          imgBig: rect3,
        },
        {
          img: rect4,
          imgBig: rect4,
        },
        {
          img: rect5,
          imgBig: rect5,
        },
        {
          img: rect6,
          imgBig: rect6,
        },
      ],
      price: 2900,
      color: [
        {
          name: "#fff",
          colorDeckr: "",
        },
        {
          name: "#6F83A4",
          colorDeckr: "",
        },
        {
          name: "#F1DDAA",
          colorDeckr: "Кофе с молоком меланж",
        },
      ],
      size: [{ size: "S" }, { size: "M" }, { size: "L" }],
      description: "Lorem",
      category: "trench",
      compound: [
        { p: "Состав: 50% Шерсть, 50% Полиэстер" },
        { p: "Подкладка: 100% Полиэстер Утеплитель" },
        { p: "Утеплитель: 90% Пух, 10% Перо" },
      ],
      care: [
        { p: "Не стирать" },
        { p: "Гладить при температуре утюга до 110°C" },
        { p: "Не отбеливать" },
        { p: "Сухая чистка (химчистка)" },
        { p: "Барабанная сушка запрещена" },
      ],
    },
  ],
  error: false,
  cart: [
    {
      availableSize: [{ size: "S" }, { size: "M" }, { size: "L" }],
      cartId: "77667888765S#F1DDAA",
      color: "#F1DDAA",
      id: 77667888765,
      img: "/static/media/one.cb6b3d78698ef159175e.jpg",
      price: 3150,
      qtty: 1,
      size: "S",
      sum: 3150,
      title: "Кремовое пальто",
    },
  ],
  currentGoods: [
    {
      id: 66765678,
      title: "Синяя парка",
      img: [
        {
          img: img5,
          imgBig: img5,
        },
        {
          img: rect2,
          imgBig: rect2,
        },
        {
          img: rect3,
          imgBig: rect3,
        },
        {
          img: rect4,
          imgBig: rect4,
        },
        {
          img: rect5,
          imgBig: rect5,
        },
        {
          img: rect6,
          imgBig: rect6,
        },
      ],
      price: 2900,
      color: [
        {
          name: "#fff",
          colorDeckr: "",
        },
        {
          name: "#6F83A4",
          colorDeckr: "",
        },
        {
          name: "#F1DDAA",
          colorDeckr: "Кофе с молоком меланж",
        },
      ],
      size: [{ size: "S" }, { size: "M" }, { size: "L" }],
      description: "Lorem",
      compound: [
        { p: "Состав: 50% Шерсть, 50% Полиэстер" },
        { p: "Подкладка: 100% Полиэстер Утеплитель" },
        { p: "Утеплитель: 90% Пух, 10% Перо" },
      ],
      care: [
        { p: "Не стирать" },
        { p: "Гладить при температуре утюга до 110°C" },
        { p: "Не отбеливать" },
        { p: "Сухая чистка (химчистка)" },
        { p: "Барабанная сушка запрещена" },
      ],
    },
  ],
  category: "all",
  search: "",
  favorite: [],
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    goodsFetched: (state, action) => {
      state.goods = action.payload;
    },
    goodsError: (state) => (state.error = true),
    setCurrentGoods: (state, action) => {
      state.currentGoods = state.goods.filter(
        (item) => item.id == action.payload
      );
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    deleteFromCart: (state, action) => {
      state.cart.splice(
        state.cart.findIndex((item) => item.cartId === action.payload),
        1
      );
    },
    changeSizeInCart: (state, action) => {
      state.cart[
        state.cart.findIndex((item) => item.cartId === action.payload.id)
      ].size = action.payload.size;
    },
    changeQttyInCart: (state, action) => {
      state.cart[
        state.cart.findIndex((item) => item.cartId === action.payload.id)
      ].qtty = action.payload.qtty;
      state.cart[
        state.cart.findIndex((item) => item.cartId === action.payload.id)
      ].sum =
        action.payload.qtty *
        state.cart[
          state.cart.findIndex((item) => item.cartId === action.payload.id)
        ].price;
    },
    changeCategory: (state, action) => {
      state.category = action.payload;
    },
    changeSearch: (state, action) => {
      state.search = action.payload;
    },
    addToFavorite: (state, action) => {
      state.favorite.push(action.payload);
    },
    deleteFromFavorite: (state, action) => {
      state.favorite.splice(
        state.favorite.findIndex((item) => item.id === action.payload),
        1
      );
    },
    getFavoriteFromStorage: (state, action) => {
      state.favorite = action.payload;
    },
  },
});

const { actions, reducer } = catalogSlice;
export default reducer;
export const {
  goodsFetched,
  goodsError,
  setCurrentGoods,
  addToCart,
  deleteFromCart,
  changeSizeInCart,
  changeQttyInCart,
  changeCategory,
  changeSearch,
  addToFavorite,
  deleteFromFavorite,
  getFavoriteFromStorage,
} = actions;
