import React, { useState } from "react";
import "./Filter.css";

const Filter = ({ filters, onFilterChange }) => {
  const { minPrice, maxPrice, brand, category, sort } = filters;

  const handleInputChange = (field, value) => {
    onFilterChange({
      ...filters,
      [field]: value,
    });
  };

  return (
    <div className="filter-container">
      <label htmlFor="minPrice" className="filter-label">
        Min Price (in $):
      </label>
      <input
        className="filter-input"
        type="number"
        id="minPrice"
        value={minPrice}
        onChange={(e) => handleInputChange("minPrice", e.target.value)}
      />
      <br />
      <label htmlFor="maxPrice" className="filter-label">
        Max Price (in $):
      </label>
      <input
        className="filter-input"
        type="number"
        id="maxPrice"
        value={maxPrice}
        onChange={(e) => handleInputChange("maxPrice", e.target.value)}
      />
      <label htmlFor="brand" className="filter-label">
        Select a brand:
      </label>
      <select
        className="filter-select"
        value={brand}
        type="select"
        onChange={(e) => handleInputChange("brand", e.target.value)}
      >
        <option value="">Select Company</option>
        <option value="Apple">Apple</option>
        <option value="Samsung">Samsung</option>
        <option value="OPPO">OPPO</option>
        <option value="Huawei">Huawei</option>
        <option value="Infinix">Infinix</option>
        <option value="HP Pavilion">HP Pavilion</option>
        <option value="Impression of Acqua Di Gio">
          Impression of Acqua Di Gio
        </option>
        <option value="Royal_Mirage">Royal_Mirage</option>
        <option value="Fog Scent Xpressio">Fog Scent Xpressio</option>
      </select>
      <label htmlFor="category" className="filter-label">
        Select a Category:
      </label>
      <select
        className="filter-select"
        value={category}
        type="select"
        onChange={(e) => handleInputChange("category", e.target.value)}
      >
        <option value="">Select Category</option>
        <option value="smartphones">smartphones</option>
        <option value="laptops">laptops</option>
        <option value="fragrances">fragrances</option>
        <option value="skincare">skincare</option>
        <option value="groceries">groceries</option>
      </select>
      <label htmlFor="sort" className="filter-label">
        Sorting:
      </label>
      <select
        className="filter-select"
        value={sort}
        type="select"
        onChange={(e) => handleInputChange("sort", e.target.value)}
      >
        <option value="">Select Sort</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    </div>
  );
};

export default Filter;
