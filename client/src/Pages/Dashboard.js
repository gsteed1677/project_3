import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import { Container } from "@material-ui/core"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <Container style={{ display: 'flex', justifyContent: 'center' }}>
      <Card>
        <Card.Body>
          <div>
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email:</strong> {currentUser.email}
          </div>

          <Button href="/update-profile" style={{ maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px', justifyContent: 'center', marginTop: "25px" }}>
            Update Profile
          </Button>

        </Card.Body>
<<<<<<< HEAD
      <div className="w-100 text-center mt-2">
        <Link>
        <Button variant="link" onClick={handleLogout} href="/login" >
          Log Out
        </Button>
        </Link>
      </div>
=======
        <div className="w-100 text-center mt-2">
          <Button variant="link" onClick={handleLogout} href="/login">
            Log Out
        </Button>
        </div>
>>>>>>> a83a163f6b64bd0cb77f5819e0540b5fa9b2cd5e
      </Card>
    </Container>
  )
}