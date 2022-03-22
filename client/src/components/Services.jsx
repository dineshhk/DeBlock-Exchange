import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill, RiCodeBoxFill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          What is
          <br />
          BLOCKCHAIN?
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          Blockchain is a distributed, immutable ledger that makes it easier to
          record transactions and track assets in a business network. An asset
          can be either tangible (such as a house, car, cash, or land) or
          intangible (intellectual property, patents, copyrights, branding). On
          a blockchain network, virtually anything of value may be recorded and
          sold, lowering risk and costs for all parties involved.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          title="Security"
          subtitle="Security is guranteed. Blockchain technology generates a data format with intrinsic security properties. It is based on cryptographic, decentralisation, and consensus concepts that ensure transaction confidence."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Future"
          icon={<RiCodeBoxFill fontSize={21} className="text-white" />}
          subtitle="The possibilities of blockchain technology are essentially limitless, and recent advancements have brought us one step closer to a decentralised, trustless internet, transaction transparency, and other benefits."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Decentralized"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Blockchain technology provides decentralisation by allowing members of a dispersed network to participate. There is no single point of failure, and a single user cannot alter the transaction record. However, there are significant critical security differences amongst blockchain technology."
        />
      </div>
    </div>
  </div>
);

export default Services;
