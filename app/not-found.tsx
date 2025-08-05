import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Bot, Home, Search, Globe, ArrowLeft, Zap } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Logo/Brand */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="relative">
            <Bot className="h-12 w-12 text-blue-600 dark:text-blue-400" />
            <Zap className="h-4 w-4 text-yellow-500 dark:text-yellow-400 absolute -top-1 -right-1" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Oh, No!</h1>
        </div>

        {/* 404 Visual */}
        <div className="relative">
          <div className="text-8xl font-bold text-gray-200 dark:text-gray-700 select-none">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex space-x-2 animate-pulse">
              <Globe className="h-8 w-8 text-blue-400 dark:text-blue-300" />
              <Search className="h-8 w-8 text-purple-400 dark:text-purple-300" />
              <Bot className="h-8 w-8 text-green-400 dark:text-green-300" />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Page Not Found</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto">
            Looks like this page got lost in the web!
          </p>
        </div>

        {/* Action Cards */}
        <div className="flex items-center justify-center  ">
          <Card className="hover:shadow-lg dark:hover:shadow-gray-900/20 transition-shadow cursor-pointer group bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 ">
            <CardContent className="p-6 text-center">
              <Home className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Go Home</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Return to the dashboard</p>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                <Link href="/dashboard">
                  <Home className="h-4 w-4 mr-2" />
                  Dashboard
                </Link>
              </Button>
            </CardContent>
          </Card>
 
        </div>
 

        {/* Footer */}
        <div className="pt-8 text-sm text-gray-500 dark:text-gray-400">
          <p>
            Need help? Contact our support team at{" "}
            <a href="mailto:support@flo.com" className="text-blue-600 dark:text-blue-400 hover:underline">
              support@flo.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
