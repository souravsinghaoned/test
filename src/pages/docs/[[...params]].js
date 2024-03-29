import { useRouter } from "next/router";
import { getSession, useSession} from "next-auth/react";


function Docs() {
    const { data: session, status } = useSession();
    const route = useRouter()
    console.log(route)
    const { params = [] } = route.query
    console.log(params)
    if (params.length === 2) {
        return (
            <div>
                Viewing docs for feature {params[0]} concepts {params[1]}.
            </div>
        )
    } else if (params.length === 1) {
        return (
            <div>
                Viewing docs for feature {params[0]}.
            </div>
        )
    }
    return (
        <div>
            Viewing docs.
        </div>
    )

}
export default Docs;