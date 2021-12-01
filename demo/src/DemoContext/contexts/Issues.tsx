import { FC, ReactElement, createContext, useState, useEffect, useCallback, SetStateAction } from "react"
import axios from "axios"

type Issue = {
  title: string
  number: number
}

interface Props {
  url: string,
  children: ReactElement
}

interface Issue_Context {
  issues: Issue[]
  url: string
  setIssues?: React.Dispatch<SetStateAction<Issue[]>>
}

export const IssueContext = createContext<Issue_Context>({
  issues: [],
  url: ''
})

const IssueProvider: FC<Props> = ({ url, children }) => {
  // State
  const [issues, setIssues] = useState<Issue[]>([])

  const fetchIssues = useCallback(async () => {
    const response = await axios(url)

    if (response) {
      setIssues(response.data)
    }

  }, [url])

  useEffect(() => {
    fetchIssues()
  }, [])

  const context = { issues, url, setIssues }

  return <IssueContext.Provider value={context}>{children}</IssueContext.Provider>
}

export default IssueProvider