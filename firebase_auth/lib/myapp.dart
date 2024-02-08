import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class SuccessPage extends StatelessWidget {
  final User user;

  const SuccessPage(this.user);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [

            Text(
              'Email: ${user.email}',
              style: TextStyle(fontSize: 18),
            ),
          ],
        ),
      ),
    );
  }
}
