import React, { useState } from 'react'
import {
    User, Mail, Phone, MapPin, Calendar, Shield, Eye, Bell,
    Lock, Camera, Edit3, Save, CheckCircle, AlertCircle, Globe, Users, UserX
} from 'lucide-react'

const ProfileSettings = ({ user, userProfile }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [activeTab, setActiveTab] = useState('personal')
    const [visibilityLevel, setVisibilityLevel] = useState(userProfile?.visibility || 'private')
    const [editData, setEditData] = useState({
        name: user?.name || "User A",
        phone: userProfile?.phone_number || "(718) 705-7778",
        bio: userProfile?.bio || "Facere repellat id iste. Consectetur quia ducimus reprehenderit excepturi occaecati est laudantium. Aliquid sit aliquam error eos sed. Inventore autem veniam deleniti autem quae voluptates.",
        address: userProfile?.address || "12674 Jonathan Land\nWest Thea, OH 18177"
    })

    const handleSave = () => {
        setIsEditing(false)
        console.log('Saving profile data:', editData)
    }

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    const handleVerify = (type) => {
        console.log(`Verifying ${type}...`)
        // Here you would implement verification logic
    }

    const visibilityOptions = [
        { key: 'public', label: 'Public', icon: Globe, description: 'Everyone can see' },
        { key: 'friends', label: 'Friends', icon: Users, description: 'Friends only' },
        { key: 'private', label: 'Private', icon: UserX, description: 'Only you' }
    ]

    const VisibilitySlider = () => {
        const currentIndex = visibilityOptions.findIndex(opt => opt.key === visibilityLevel)

        return (
            <div className="space-y-3">
                <div className="relative">
                    <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 rounded-full p-1">
                        {visibilityOptions.map((option, index) => {
                            const Icon = option.icon
                            return (
                                <button
                                    key={option.key}
                                    onClick={() => setVisibilityLevel(option.key)}
                                    className={`relative flex-1 flex items-center justify-center px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                        visibilityLevel === option.key
                                            ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm'
                                            : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                                    }`}
                                >
                                    <Icon className="w-4 h-4 mr-2" />
                                    {option.label}
                                </button>
                            )
                        })}
                    </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    {visibilityOptions.find(opt => opt.key === visibilityLevel)?.description}
                </p>
            </div>
        )
    }

    const tabs = [
        { id: 'personal', label: 'Personal Information' },
        { id: 'account', label: 'Account & Contact' },
        { id: 'privacy', label: 'Privacy & Security' }
    ]

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200 dark:border-gray-700">
                <nav className="flex space-x-8 px-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                                activeTab === tab.id
                                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>
            </div>

            <div className="p-6">
                {/* Personal Information Tab */}
                {activeTab === 'personal' && (
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Personal Information
                            </h2>
                            <button
                                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                                className="inline-flex items-center px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                            >
                                {isEditing ? (
                                    <>
                                        <Save className="w-4 h-4 mr-2" />
                                        Save
                                    </>
                                ) : (
                                    <>
                                        <Edit3 className="w-4 h-4 mr-2" />
                                        Edit
                                    </>
                                )}
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Full Name
                                </label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={editData.name}
                                        onChange={(e) => setEditData({...editData, name: e.target.value})}
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                ) : (
                                    <p className="text-gray-900 dark:text-white py-2">{user?.name}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Date of Birth
                                </label>
                                <p className="text-gray-900 dark:text-white flex items-center py-2">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    {formatDate(userProfile?.date_of_birth)}
                                </p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Gender
                                </label>
                                <p className="text-gray-900 dark:text-white capitalize py-2">{userProfile?.gender}</p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Address
                                </label>
                                {isEditing ? (
                                    <textarea
                                        value={editData.address}
                                        onChange={(e) => setEditData({...editData, address: e.target.value})}
                                        rows={2}
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                ) : (
                                    <p className="text-gray-900 dark:text-white flex items-start py-2">
                                        <MapPin className="w-4 h-4 mr-2 mt-0.5" />
                                        <span className="whitespace-pre-line">{userProfile?.address}</span>
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Bio
                            </label>
                            {isEditing ? (
                                <textarea
                                    value={editData.bio}
                                    onChange={(e) => setEditData({...editData, bio: e.target.value})}
                                    rows={3}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Tell us about yourself..."
                                />
                            ) : (
                                <p className="text-gray-900 dark:text-white py-2">{userProfile?.bio}</p>
                            )}
                        </div>
                    </div>
                )}

                {/* Account & Contact Information Tab */}
                {activeTab === 'account' && (
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                            Account & Contact Information
                        </h2>

                        <div className="space-y-6">
                            <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">User ID</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">#{user?.id}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {/* Email */}
                                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                                    <div className="flex items-center space-x-3">
                                        <Mail className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-900 dark:text-white">Email Address</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-300">{user?.email}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                        <span className="text-sm text-green-600 dark:text-green-400 font-medium">Verified</span>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                                    <div className="flex items-center space-x-3">
                                        <Phone className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-900 dark:text-white">Phone Number</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-300">{userProfile?.phone_number}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        {userProfile?.phone_verified ? (
                                            <>
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                                <span className="text-sm text-green-600 dark:text-green-400 font-medium">Verified</span>
                                            </>
                                        ) : (
                                            <>
                                                <AlertCircle className="w-5 h-5 text-red-500" />
                                                <span className="text-sm text-red-600 dark:text-red-400 font-medium">Unverified</span>
                                                <button
                                                    onClick={() => handleVerify('phone')}
                                                    className="ml-2 px-3 py-1 text-xs bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                                >
                                                    Verify
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">Account Status</h3>
                                    <p className="text-sm text-green-600 dark:text-green-400">Active & Verified</p>
                                </div>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200">
                  Verified
                </span>
                            </div>

                            <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">Member Since</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{formatDate(user?.created_at)}</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between py-3">
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">Last Updated</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{formatDate(userProfile?.updated_at)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Privacy & Security Tab */}
                {activeTab === 'privacy' && (
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                            Privacy & Security Settings
                        </h2>

                        <div className="space-y-6">
                            {/* Profile Visibility */}
                            <div>
                                <h3 className="text-sm font-medium text-gray-900 dark:text-white flex items-center mb-4">
                                    <Eye className="w-4 h-4 mr-2" />
                                    Profile Visibility
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                    Control who can see your profile information and posts
                                </p>
                                <VisibilitySlider />
                            </div>

                            {/* Notification Settings */}
                            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
                                    Notification Preferences
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between py-3">
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-900 dark:text-white flex items-center">
                                                <Bell className="w-4 h-4 mr-2" />
                                                Email Notifications
                                            </h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Receive updates via email</p>
                                        </div>
                                        <button className="bg-blue-600 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                            <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between py-3">
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                                                Push Notifications
                                            </h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Receive notifications on your device</p>
                                        </div>
                                        <button className="bg-blue-600 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                            <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between py-3">
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                                                Emergency Alerts
                                            </h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Important pet safety notifications</p>
                                        </div>
                                        <button className="bg-blue-600 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                            <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Security Settings */}
                            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
                                    Security Settings
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between py-3">
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-900 dark:text-white flex items-center">
                                                <Shield className="w-4 h-4 mr-2" />
                                                Two-Factor Authentication
                                            </h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Add an extra layer of security to your account</p>
                                        </div>
                                        <button className="bg-gray-300 dark:bg-gray-600 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                                            <span className="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between py-3">
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                                                Login Alerts
                                            </h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Get notified when someone signs into your account</p>
                                        </div>
                                        <button className="bg-blue-600 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                            <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between py-3 border-t border-gray-200 dark:border-gray-700 pt-4">
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-900 dark:text-white flex items-center">
                                                <Lock className="w-4 h-4 mr-2" />
                                                Change Password
                                            </h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Update your account password</p>
                                        </div>
                                        <button className="px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/50 rounded-md transition-colors">
                                            Change
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between py-3 border-t border-gray-200 dark:border-gray-700 pt-4">
                                        <div>
                                            <h4 className="text-sm font-medium text-red-600 dark:text-red-400">
                                                Delete Account
                                            </h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Permanently delete your account and all data</p>
                                        </div>
                                        <button className="px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/50 rounded-md transition-colors">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProfileSettings