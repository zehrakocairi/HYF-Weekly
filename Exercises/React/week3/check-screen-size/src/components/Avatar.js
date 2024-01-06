import { BigHead } from "@bigheads/core";

function Avatar({ specs }) {
  return (
    <div className="avatar">
      <BigHead {...specs} />
    </div>
  );
}

export default Avatar;
