require 'test_helper'

class UsersSignupTest < ActionDispatch::IntegrationTest

  test "form uses correct path" do
    get signup_path
      assert_select 'form[action="/signup"]'
  end

  test "invalid signup information" do
    assert_no_difference 'User.count' do
      post signup_path, params: { user: {  name: "",
                                          email: "user@invalid",
                                          password:               "foo",
                                          password_confirmation:  "bar" } }
    end
    assert_template 'users/new'
    assert_select 'div#error_explanation'
    assert_select 'div.field_with_errors'
  end

  test "valid signup information" do
    assert_difference 'User.count', 1 do
      post signup_path, params: { user: { name: "Example",
                                          email: "example@example.org",
                                          password: "123456",
                                          password_confirmation: "123456" } }
    end
    follow_redirect!
    assert_template 'users/show'
    assert is_logged_in?
    assert_not flash.empty?
    assert flash[:success]
  end
end
