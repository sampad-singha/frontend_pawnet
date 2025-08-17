import React, { useState } from 'react'
import { Settings, Camera, MapPin, Calendar, Users, Heart, User } from 'lucide-react'
import ProfileSettings from './ProfileSettings'
import ProfilePosts from './ProfilePosts'

const Profile = () => {
    const [activeTab, setActiveTab] = useState('posts')

    // Sample user data from your provided structure
    const user = {
        id: 2,
        name: "User A",
        email: "userA@example.com",
        created_at: "2025-08-12T08:49:56.000000Z",
        updated_at: "2025-08-12T08:49:56.000000Z",
        avatar_url: null,
        avatar: null
    }

    const userProfile = {
        id: 2,
        user_id: 2,
        date_of_birth: "1997-04-18T00:00:00.000000Z",
        gender: "male",
        phone_number: "(718) 705-7778",
        phone_verified: 0,
        address: "12674 Jonathan Land\nWest Thea, OH 18177",
        city_id: 119265,
        state_id: 1419,
        country_id: 233,
        bio: "Facere repellat id iste. Consectetur quia ducimus reprehenderit excepturi occaecati est laudantium. Aliquid sit aliquam error eos sed. Inventore autem veniam deleniti autem quae voluptates.",
        visibility: "private",
        created_at: "2025-08-12T08:49:57.000000Z",
        updated_at: "2025-08-12T08:49:57.000000Z"
    }

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    const calculateAge = (birthDate) => {
        const today = new Date()
        const birth = new Date(birthDate)
        let age = today.getFullYear() - birth.getFullYear()
        const monthDiff = today.getMonth() - birth.getMonth()

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--
        }

        return age
    }

    const stats = [
        { label: 'Posts', value: '127', icon: Heart },
        { label: 'Friends', value: '342', icon: Users },
        { label: 'Pets Helped', value: '28', icon: Heart },
    ]

    const tabs = [
        { id: 'posts', label: 'Posts', icon: User },
        { id: 'settings', label: 'Settings', icon: Settings },
    ]

    return (
        <div className="space-y-6">
            {/* Profile Header */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
                {/* Cover Photo */}
                <div className="h-48 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative">
                    <button className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-opacity">
                        <Camera className="w-4 h-4" />
                    </button>
                </div>

                {/* Profile Info */}
                <div className="px-6 pb-6">
                    <div className="flex flex-col sm:flex-row sm:items-end sm:space-x-6 -mt-16 mb-4">
                        {/* Avatar */}
                        <div className="relative mb-4 sm:mb-0">
                            <div className="w-32 h-32 bg-white dark:bg-gray-800 rounded-full p-1 shadow-lg">
                                <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                                    {user.name.charAt(0)}
                                </div>
                            </div>
                            <button className="absolute bottom-2 right-2 p-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors">
                                <Camera className="w-4 h-4" />
                            </button>
                        </div>

                        {/* User Info */}
                        <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                                        {user.name}
                                    </h1>
                                    <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
                                    <div className="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-400 space-x-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                        {calculateAge(userProfile.date_of_birth)} years old
                    </span>
                                        <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      West Thea, OH
                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Status Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200">
              ✓ Active Member
            </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-200">
              🏆 Pet Advocate
            </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-200">
              🎯 Verified Account
            </span>
                    </div>

                    {/* Bio */}
                    <div className="mb-4">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {userProfile.bio}
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-200 dark:border-gray-700">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Member Since */}
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            🗓️ Member since {formatDate(user.created_at)}
                        </p>
                    </div>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div className="border-b border-gray-200 dark:border-gray-700">
                    <nav className="flex space-x-8 px-6">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`py-4 text-sm font-medium border-b-2 transition-colors flex items-center space-x-2 ${
                                    activeTab === tab.id
                                        ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                                        : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                                }`}
                            >
                                <tab.icon className="w-4 h-4" />
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Tab Content */}
                <div className="p-6">
                    {activeTab === 'posts' && (
                        <ProfilePosts user={user} />
                    )}

                    {activeTab === 'settings' && (
                        <ProfileSettings user={user} userProfile={userProfile} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Profile