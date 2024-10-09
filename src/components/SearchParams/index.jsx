"use client";

import { debounce } from "@/helpers/debounce";
import { useRouter, useSearchParams } from "next/navigation";

const SearchParams = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = new URLSearchParams(searchParams.toString());

  const handleChange = (e) => {
    if (e.target.value === "") {
      params.delete(e.target.name);
      router.push("/" + "?" + params.toString());
      return;
    }
    params.set(e.target.name, e.target.value);
    router.push("/" + "?" + params.toString());
  };

  const handleReset = (e) => {
    params.delete(e.target.name);
    router.push("/" + "?" + params.toString());
  };

  const debouncedHanldeChange = debounce(handleChange, 500);

  return (
    <div className="mb-24 rounded-b-lg bg-indigo-400">
      <h2 className="text-center">Choose params</h2>
      <div className="flex justify-between px-20 py-10">
        <div className="flex flex-col justify-evenly">
          <input
            className="rounded bg-gray-800 p-1"
            name="type"
            placeholder="Type..."
            onChange={debouncedHanldeChange}
            defaultValue={searchParams.get("type")}
          />
          <input
            className="rounded bg-gray-800 p-1"
            name="species"
            placeholder="Species..."
            onChange={debouncedHanldeChange}
            defaultValue={searchParams.get("species")}
          />
        </div>
        <div>
          <form
            onReset={handleReset}
            name="status"
            className="mb-3 rounded-lg bg-emerald-800 p-2"
          >
            <fieldset>
              <legend>Status</legend>
              <div className="flex gap-2">
                <label>
                  <input
                    type="radio"
                    id="Alive"
                    defaultValue="Alive"
                    name="status"
                    onChange={handleChange}
                    defaultChecked={searchParams.get("status") === "Alive"}
                  />
                  Alive
                </label>
                <label>
                  <input
                    type="radio"
                    id="Dead"
                    value="Dead"
                    name="status"
                    onChange={handleChange}
                    defaultChecked={searchParams.get("status") === "Dead"}
                  />
                  Dead
                </label>
                <label>
                  <input
                    type="radio"
                    id="unknown"
                    value="unknown"
                    name="status"
                    onChange={handleChange}
                    defaultChecked={searchParams.get("status") === "unknown"}
                  />
                  Unknown
                </label>
              </div>
            </fieldset>
            <button type="reset">Reset</button>
          </form>
          <form
            onReset={handleReset}
            name="gender"
            className="rounded-lg bg-emerald-800 p-2"
          >
            <fieldset>
              <legend>Gender</legend>
              <div className="flex gap-2">
                <label>
                  <input
                    type="radio"
                    id="Female"
                    value="Female"
                    name="gender"
                    onChange={handleChange}
                    defaultChecked={searchParams.get("gender") === "Female"}
                  />
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    id="Male"
                    value="Male"
                    name="gender"
                    onChange={handleChange}
                    defaultChecked={searchParams.get("gender") === "Male"}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    id="Genderless"
                    value="Genderless"
                    name="gender"
                    onChange={handleChange}
                    defaultChecked={searchParams.get("gender") === "Genderless"}
                  />
                  Genderless
                </label>
                <label>
                  <input
                    type="radio"
                    id="unknown"
                    value="unknown"
                    name="gender"
                    onChange={handleChange}
                    defaultChecked={searchParams.get("gender") === "unknown"}
                  />
                  Unknown
                </label>
              </div>
            </fieldset>
            <button type="reset">Reset</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchParams;
