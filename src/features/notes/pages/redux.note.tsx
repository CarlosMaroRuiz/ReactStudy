import RenderMarkdown from "@/common/components/others/RenderMarkdown";
import { ReduxContent } from "../content/redux.content";
const ReduxNote = () => {


  return (
    <div className="">
      <RenderMarkdown markdown={ReduxContent} />
    </div>
  )
}

export default ReduxNote;