import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const SCenters = useLoaderData();
  const regionDuplicate = SCenters.map((c) => c.region);
  const regions = [...new Set(regionDuplicate)];

  const districtByRegion = (region) => {
    const regionDistrict = SCenters.filter(
      (center) => center.region === region
    );
    const districts = regionDistrict.map((district) => district.district);
    return districts;
  };
  const reciverRegion = useWatch({ control, name: "reciverRegion" });
  const senderRegion = useWatch({ control, name: "senderRegion" });

  const handleSendParcel = (data) => {
    console.log(data);
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);
    console.log(isSameDistrict, isDocument, parcelWeight);

    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    console.log("cost", cost);
    Swal.fire({
      title: `Aggree with the cost ${cost} taka?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm it !",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="py-10 rounded-2xl bg-gray-100 shadow-xl my-10">
      <div className="px-15">
        <h2 className=" text-4xl font-bold text-secondary">Send A Parcel</h2>
        <h1 className="text-xl py-6 text-secondary font-semibold">
          Enter your parcel details
        </h1>

        <form className="text-black " onSubmit={handleSubmit(handleSendParcel)}>
          {/*Document */}
          <div className="flex flex-col md:flex-row gap-8 my-8">
            <label className="label">
              <input
                type="radio"
                value={"document"}
                className="radio"
                defaultChecked
                {...register("parcelType")}
              />
              Document
            </label>
            <label className="label">
              <input
                type="radio"
                value={"non-document"}
                className="radio"
                {...register("parcelType")}
              />
              Non-Document
            </label>
          </div>

          {/*parcel information : name weight */}
          <div className="grid-cols-1 grid md:grid-cols-2  gap-8">
            <div>
              <fieldset className="fieldset">
                <label className="label">Parcel Name</label>
                <input
                  type="text"
                  {...register("parcelName")}
                  className="input w-full"
                  placeholder="Parcel name"
                />
              </fieldset>
            </div>
            <div>
              <fieldset className="fieldset">
                <label className="label">Parcel Weight (kg)</label>
                <input
                  type="number"
                  {...register("parcelWeight")}
                  className="input w-full"
                  placeholder="Parcel weight "
                />
              </fieldset>
            </div>
          </div>

          {/*two column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            {/* Sender */}
            <div>
              <h4 className="text-xl text-secondary font-semibold mb-4">
                Sender Details
              </h4>

              <fieldset className="fieldset space-y-4">
                {/*Sender Name */}
                <div>
                  <label className="label">Sender Name</label>
                  <input
                    type="text"
                    {...register("senderName")}
                    className="input w-full"
                    placeholder="Sender name"
                  />
                </div>
                {/*Sender Email */}
                <div>
                  <label className="label">Sender Email</label>
                  <input
                    type="email"
                    {...register("senderEmail")}
                    className="input w-full"
                    placeholder="Sender email here"
                  />
                </div>

                {/*Sender Region*/}
                <div>
                  <label className="label">Sender Region</label>
                  <select
                    defaultValue=""
                    {...register("senderRegion")}
                    className="select select-bordered w-full"
                  >
                    <option value="" disabled>
                      Select Sender Region
                    </option>
                    {regions.map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                {/*Sender District*/}
                <div>
                  <label className="label">Sender District</label>
                  <select
                    defaultValue=""
                    {...register("senderDistrict")}
                    className="select select-bordered w-full"
                  >
                    <option value="" disabled>
                      Select Sender District
                    </option>
                    {districtByRegion(senderRegion).map((distric, i) => (
                      <option key={i} value={distric}>
                        {distric}
                      </option>
                    ))}
                  </select>
                </div>

                {/*Sender Address */}
                <div>
                  <label className="label">Sender Address</label>
                  <input
                    type="text"
                    {...register("senderAddress")}
                    className="input w-full"
                    placeholder="Sender Address"
                  />
                </div>
                {/*Sender Contact */}
                <div>
                  <label className="label">Sender Contact No</label>
                  <input
                    type="number"
                    {...register("senderPhone")}
                    className="input w-full"
                    placeholder="Sender contact number"
                  />
                </div>
              </fieldset>
            </div>

            {/* Receiver */}
            <div>
              <h4 className="text-xl text-secondary font-semibold mb-4">
                Receiver Details
              </h4>

              <fieldset className="fieldset space-y-4">
                {/*Reciver Name */}
                <div>
                  <label className="label">Receiver Name</label>
                  <input
                    type="text"
                    {...register("receiverName")}
                    className="input w-full"
                    placeholder="Receiver Name"
                  />
                </div>

                {/*Reciver Email */}
                <div>
                  <label className="label">Receiver Email</label>
                  <input
                    type="email"
                    {...register("receiverEmail")}
                    className="input w-full"
                    placeholder="Receiver email here"
                  />
                </div>

                {/*Reciver Region */}
                <div>
                  <label className="label">Reciver Region</label>
                  <select
                    defaultValue=""
                    {...register("reciverRegion")}
                    className="select select-bordered w-full"
                  >
                    <option value="" disabled>
                      Select Reciver Region
                    </option>
                    {regions.map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
                {/*Reciver Districts */}
                <div>
                  <label className="label">Reciver Districts</label>
                  <select
                    defaultValue=""
                    {...register("receiverDistrict")}
                    className="select select-bordered w-full"
                  >
                    <option value="" disabled>
                      Select Receiver District
                    </option>
                    {districtByRegion(reciverRegion).map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                {/*Receiver Address */}
                <div>
                  <label className="label">Receiver Address</label>
                  <input
                    type="text"
                    {...register("receiverAddress")}
                    className="input w-full"
                    placeholder="Receiver Address"
                  />
                </div>

                {/*Receiver Contact */}
                <div>
                  <label className="label">Receiver Contact No</label>
                  <input
                    type="number"
                    {...register("receiverPhone")}
                    className="input w-full"
                    placeholder="Receiver contact number"
                  />
                </div>
              </fieldset>
            </div>
          </div>

          <input
            type="submit"
            className="btn btn-primary text-black"
            value={"Send Parcel"}
          />
        </form>
      </div>
    </div>
  );
};

export default SendParcel;
