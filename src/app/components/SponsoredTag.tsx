import Tag from "./Tag/Tag";
import SponsoredIcon from "../public/ui/sponsored.svg"

function SponsoredTag() {
  return (
    <Tag size="small" icon={SponsoredIcon} textColor="var(--primary)" shadow={false}>Sponsored</Tag>
  )
}

export default SponsoredTag

